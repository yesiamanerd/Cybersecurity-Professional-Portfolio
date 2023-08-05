@echo off

kubectl apply -f k8s\deployment.yml
kubectl apply -f k8s\service.yml
kubectl apply -f k8s\elasticsearch-deployment.yml
kubectl apply -f k8s\elasticsearch-service.yml
kubectl apply -f k8s\logstash-deployment.yml
kubectl apply -f k8s\logstash-service.yml
kubectl apply -f k8s\kibana-deployment.yml
kubectl apply -f k8s\kibana-service.yml

echo All deployments applied successfully!

pause
