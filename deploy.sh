docker build -t dordairobert/multi-client:latest -t dordairobert/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t dordairobert/multi-server:latest -t dordairobert/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t dordairobert/multi-worker:latest -t dordairobert/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push dordairobert/multi-client:latest
docker push dordairobert/multi-server:latest
docker push dordairobert/multi-worker:latest

docker push dordairobert/multi-client:$SHA
docker push dordairobert/multi-server:$SHA
docker push dordairobert/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=dordairobert/multi-server:$SHA
kubectl set image deployments/client-deployment client=dordairobert/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=dordairobert/multi-worker:$SHA