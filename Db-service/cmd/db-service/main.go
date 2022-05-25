package main

import (
	"fmt"
	"log"
	"net/http"
	"os/exec"
	"sync"

	"github.com/gorilla/mux"
)

type HTTPRequestSignatureFn func(http.ResponseWriter, *http.Request)

func syncHandler_4_45_0(mutex *sync.Mutex) HTTPRequestSignatureFn {
	return func(w http.ResponseWriter, r *http.Request) {
		mutex.Lock()
		baseHandler(w, r, "./restore-4-45-0.sh")
		mutex.Unlock()
	}
}

func syncHandler_4_0_0(mutex *sync.Mutex) HTTPRequestSignatureFn {
	return func(w http.ResponseWriter, r *http.Request) {
		mutex.Lock()
		baseHandler(w, r, "./restore-4-0-0.sh")
		mutex.Unlock()
	}
}

func baseHandler(w http.ResponseWriter, r *http.Request, targetScript string) {
	fmt.Println("receiving restore request...")
	w.Header().Set("Content-Type", "application/json")
	err := exec.Command("/bin/bash", targetScript).Run()
	if err != nil {
		fmt.Println("restore with errors...")
		w.Write([]byte(`{"status":"error"}`))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	fmt.Println("restore success...")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status":"ok"}`))
}

func main() {
	r := mux.NewRouter()
	// In order to avoid restore collisions between request on the same target version we use mutex :)
	mutex_4_45_0 := &sync.Mutex{}
	mutex_4_0_0 := &sync.Mutex{}

	// Routes consist of a path and a handler function.
	r.HandleFunc("/reset-db-4-45-0", syncHandler_4_45_0(mutex_4_45_0))
	r.HandleFunc("/reset-db-4-0-0", syncHandler_4_0_0(mutex_4_0_0))

	// Bind to a port and pass our router in
	log.Fatal(http.ListenAndServe(":8000", r))
}
