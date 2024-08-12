export const  Search =(randomArray, str)=>{


const arr= randomArray.filter((data)=>{
           if(data.Name.toLowerCase().includes(str.toLowerCase()))
            return data;
    })
return arr;
}