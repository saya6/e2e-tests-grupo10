const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { options, tests, ghost1, ghost2 } = config;

async function executeTest(){
    
    console.log("Generando reporte")

    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
   
    if (!fs.existsSync(`./results/images`)){
        fs.mkdirSync(`./results/images`, { recursive: true });
    }

    for(const test of tests){
        let tool = test["tool"]
        let feature = test["feature"]
        let stage = test["stage"]

        if (!fs.existsSync(`./results/images/${tool}/${feature}/${stage}`)){
            fs.mkdirSync(`./results/images/${tool}/${feature}/${stage}`, { recursive: true });
        }
        
        for (const step of fs.readdirSync(`../${ghost1}/${tool}/images/${feature}/${stage}`)){
            fs.copyFileSync(`../${ghost1}/${tool}/images/${feature}/${stage}/${step}`, `./results/images/${tool}/${feature}/${stage}/before-${step}`)
            fs.copyFileSync(`../${ghost2}/${tool}/images/${feature}/${stage}/${step}`, `./results/images/${tool}/${feature}/${stage}/after-${step}`)
            
            const data = await compareImages(        
            fs.readFileSync(`./results/images/${tool}/${feature}/${stage}/before-${step}`),
            fs.readFileSync(`./results/images/${tool}/${feature}/${stage}/after-${step}`),
            options
            );

            if(!(tool in resultInfo)){
                resultInfo[tool] = {}
            }

            if(!(feature in resultInfo[tool])){
                resultInfo[tool][feature] = {}  
            }

            if(!(stage in resultInfo[tool][feature])){
                resultInfo[tool][feature][stage] = {}
                resultInfo[tool][feature][stage]['steps'] = []
            }

            resultInfo[tool][feature][stage][step] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }

            resultInfo[tool][feature][stage]['steps'].push(step)
            
            fs.writeFileSync(`./results/images/${tool}/${feature}/${stage}/compare-${step}`, data.getBuffer());
            
        }
    }
    
    fs.writeFileSync(`./results/report.html`, createReport(datetime, tests, resultInfo));
    fs.copyFileSync('./bootstrap.min.css', `./results/bootstrap.min.css`);
    fs.copyFileSync('./bootstrap.bundle.min.js', `./results/bootstrap.bundle.min.js`);

    return "Reporte generado";  
  }

  (async ()=>console.log(await executeTest()))();

function stepReport(tool, feature, stage, step, info){
    feature_min = feature.split(".")[0]
    return `<div class="accordion-item">
    <div class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${tool}-${feature_min}-${stage}-${step.slice(0, -4)}" aria-expanded="false" aria-controls="${step.slice(0, -4)}">
            Step: ${step.slice(0, -4)}<br>Raw difference: ${info['misMatchPercentage']}%
        </button>
    </div>
    <div id="${tool}-${feature_min}-${stage}-${step.slice(0, -4)}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#${tool}-${feature}-${stage}"> 
        <div class="row mb-2">
            <div class="col">
                <span class="row">
                    <p class="text-center text-muted">Reference</p>
                </span>
                <img class="row img-fluid" src="images/${tool}/${feature}/${stage}/before-${step}" id="refImage" label="Reference">
            </div>
            <div class="col">
                <span class="row">
                    <p class="text-center text-muted">Test</p>
                </span>
                <img class="row img-fluid" src="images/${tool}/${feature}/${stage}/after-${step}" id="testImage" label="Test">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span class="row">
                    <p class="text-center text-muted">Diff</p>
                </span>
                <img class="row img-fluid" src="images/${tool}/${feature}/${stage}/compare-${step}" id="diffImage" label="Diff">
            </div>
        </div>
    </div>
  </div>`
}

function createReport(datetime, tests, resInfo){
    let ans = `<html>
        <head>
            <title> VRT Report </title>
            <link href="bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <h1>Report for Ghost</h1>
                <p>Executed: ${datetime}</p>
            </div>`
    
    for(const test of tests){
        let tool = test["tool"]
        let feature = test["feature"]
        let stage = test["stage"]

        ans += `<div class="container my-4">
                    <h3>${tool} - ${[feature]} - ${stage}</h3>
                    <div class="accordion accordion-flush" id="${tool}-${feature}-${stage}">
                        ${resInfo[tool][feature][stage]['steps'].map(step=>stepReport(tool, feature, stage, step, resInfo[tool][feature][stage][step])).join('\n')}
                    </div>
                </div>`
    }    
    
    ans += `<script src="bootstrap.bundle.min.js"></script>
        </body>
    </html>`

    return ans
}
