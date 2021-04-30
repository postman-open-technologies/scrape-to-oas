declare -a arr=("product-hunt" "libraries.io" "ups" "quandl" "reddit")

for name in "${arr[@]}"
do
  echo "Scraping $name"
  node index.js --config ./config/$name.js --output ./output/$name.openapi.yaml
  node validate ./output/$name.openapi.yaml
done


