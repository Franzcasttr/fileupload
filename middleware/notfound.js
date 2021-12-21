const notfound = (req,res)=>{
res.status(404).send('The item you were looking is not available')
}

module.exports = notfound