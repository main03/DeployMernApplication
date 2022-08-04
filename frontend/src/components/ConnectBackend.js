import bcrypt from 'bcryptjs';

const ConnectBackend= async (name,email, password)=>

 {
    
     try {
      //plaintext +hash function and the hashkey is generated
      const hash = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(password, hash);
    
      console.log(`Data going in backend as name: ${name} and email is ${email} and password is ${password}`);
     const response= await fetch("http://localhost:5000/register",{
        // await
         method:'post',
         body:JSON.stringify({name,email,
        password: hashedpassword}),
         headers:{
             'Content-Type':'application/json'
         }

     });
     if (!response.ok) {
      // ${response.status}
         throw new Error(`Error! status:`);
       }
       //json kay bator body text pass krny pr mil jaye ga
    
    const result=await response.json();
    return result; 
 }
 catch (err) {
     console.log(err);
   }
   console.log("data not recieved in backend");
 }
 export default ConnectBackend;