const str = "I love Bangladesh";

// output = "hdgkfsdhfgjkahsd"

function reverseWords(data){
    const dataAsArray = data.split(" ");
    const result = dataAsArray.map((d)=>{
        return d.split("").reverse().join("");

    })

    return result.join(" ");


}


console.log(reverseWords(str));

const string =" Java Is a Programming Language"

function shortWords (data){
    const dataAsArrays= string.split(" ");

    dataAsArrays.sort((a,b) =>{
        return a.length - b.length;

    });
    return dataAsArrays.join(" ");

}

console.log(shortWords(string))

