import express from "express";
import  User  from "../models/users.js";

const router = express.Router();
        //GET:all the users
        router.get("/",async (req,res) => {
            try {
                const users = await User.find();
                return res.status(201).json(users);
            } catch (error) {
                return res.status(500).json({message:error.message});
            }
        });

        //POST: add new user
        router.post("/", async (req, res) => {
            try {
              const newUser = new User(req.body);
              const savedUser = await newUser.save();
              res.status(201).json(savedUser);

            } catch (err) {
              res.status(500).json({ message: err.message });
            }
          });

        //p\PUT:edit using id
        router.put("/:id", async (req,res) => {
           try {
            const update = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
            res.status(201).json({message:update});
           } catch (error) {
            res.status(500).json({message: err.message});
           } 
        });

        //DELETE: removing a user using id
        router.delete("/:id", async (req,res) => {
           try {
            await User.findByIdAndDelete(req.params.id);
            res.status(201).json({message: "deleted successfully"});
           } catch (error) {
                console.error(error);
           } 
        });

          


export {router};