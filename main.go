package main

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	router := mux.NewRouter().StrictSlash(true)
	//Serve Other Routes Above PathPrefix

	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./homepage/build")))
	log.Fatal(http.ListenAndServe(":8080", router))
}
