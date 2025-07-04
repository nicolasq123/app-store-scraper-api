build:
	docker build . -t appstoreapi:latest

run:
	docker run --rm -it --name appstoreapi -p 3301:3301 appstoreapi:latest
