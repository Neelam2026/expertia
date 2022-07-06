const express=require("express");
const jobdetail=require("../models/jobdetails.model");

const router=express.Router();

router.get('/jobdetail', async(req,res)=>{
    try {
        let page=req.query.page||1
        let pagesize=req.query.pagesize||12
        let skip=(page-1)*pagesize
        let sort=req.query.sort
        let sortvalue=req.query.sortvalue
        let filter=req.query.filter
        let filtervalue=req.query.filtervalue

        const job = await jobdetail.find({[filter]:filtervalue}).skip(skip).limit(pagesize).sort({[sort]:sortvalue}).lean().exec();
        let countpage=Math.ceil((await jobdetail.find({[filter]:filtervalue}).countDocuments())/pagesize)
        return res.status(200).send({job,countpage});
    } catch (error) {
        return res.status(500).send(error);
    }
  })


router.get('/jobdetail/search/:id', async(req,res)=>{
    try {
        const job = await jobdetail.find({role:req.params.id}).lean().exec();
        return res.status(200).send(job);
    } catch (error) {
        return res.status(500).send(error);
    }
  })


router.get('/jobdetail/:id', async(req,res)=>{
  try {
      const job = await jobdetail.findById({_id:req.params.id}).lean().exec();
      return res.status(200).send(job);
  } catch (error) {
      return res.status(500).send(error);
  }
})

router.post('/jobdetail', async(req,res)=>{
    try {
        const job = await jobdetail.create(req.body);
        return res.status(201).send(job)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports= router;