function main()
{
    let str:string="I like java programming";
        //find vowel count in each word i=1, java 2
        let a:string[] =str.split(" ");
        for(let word of a)
        {
            find(word);
        }
}
function find(str:string)
{
    const matchArray =str.match(/[aeiouAEIOU]/g)
    const count = matchArray ? matchArray.length : 0;
    console.log(`${str} has Vowel count is:${count}`);
}
main();