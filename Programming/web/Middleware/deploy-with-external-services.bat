@echo off

kubectl apply -f k8s\deployment.yml
kubectl apply -f k8s\service.yml
kubectl apply -f k8s\elasticsearch-external-service.yml
kubectl apply -f k8s\logstash-external-service.yml
kubectl apply -f k8s\kibana-external-service.yml

echo All deployments applied successfully!

pause
