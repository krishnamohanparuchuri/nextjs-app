export default async function getProducts(req,res) {
    const url = "https://fakestoreapi.com/products"
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
}