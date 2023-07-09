
const updateProduct =(req, res) => {
    console.log(req.body);
    res.status(401).send({
        test:'123'
    });
}

module.exports = updateProduct;