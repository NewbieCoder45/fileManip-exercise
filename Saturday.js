// Requiring express
const express = require('express');
const app = express();
const path = require('path');

// Serving static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Requiring reading/writing access for files
const { readFile, writeFile } = require('fs');
const { a } = require('fs');

// Requiring promise methods and creating readFilePromise and await writeFilePromise
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define the route for /
app.get('/', async (req, res) => {
    try {
        const data = await readFilePromise('./Saturday/SabKuch.txt', 'utf8');

        // Rendering the EJS
        res.render('sabKuch', {
            title: 'No matter how far you go,\nYou\'ll end up alone',
            content: data
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

app.get('/stupid', async(req,res)=>{
    try{
        const data = await readFilePromise('./Saturday/somethingStupid.txt', 'utf8')

        res.render('sabKuch', {
            title: 'Tera net worth mere lund pe',
            content: data
        })
    }
    catch(err){
        console.log(err)
        res.status(404).send('Text import not found')
    }
})

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Other methods (reachOnTime, drinkingAgain) remain the same


//Defining necessary steps/methods to nail it today
const reachOnTime = async() => {
    try{
await writeFilePromise('./Saturday/prep.txt', 
                            'Wake up atleast at 11:30AM \n',
                            {flag:a},
                            (err, data) =>{
                                if(err){
                                    console.log('Bhsdk don\'t ruin this atleast yaar')
                                    return;
                                }
                                else{
                                    console.log(data);
                                    return;
                                }
                            } )
await writeFilePromise('./Saturday/prep.txt', 
                'Look your best at 1:00PM and be all ready\n',
                {flag:a},
                (err, data) =>{
                    if(err){
                        console.log('We can do this! Its not over')
                        return;
                    }
                    else{
                        console.log(data);
                        return;
                    }
                } )
await writeFilePromise('./Saturday/prep.txt',
         'Look into her eyes and it\'ll tell you everything you need to know',
        {flag: 'a'},
        (err, data)=> err ? console.log(err) : console.log(data))
}catch(err){
console.log(err)
return;
}
}

const drinkingAgain = async(bool) =>{
    let somethingStupid = "I know I stand in line until you think \n You have the time to spend an evening with me \n And if we go someplace to dance \n I know that there's a chance you won't be leaving with me \n And afterwards we drop into a quiet little place \n And have a drink or two \n And then I go and spoil it all by saying \n Something stupid like I love you \n I can see it in your eyes that you despise \n The same old lies you heard the night before \n And though it's just a line to you for me it's true \n And never seemed so right before \n I practice every day to find some clever lines \n To say to make the meaning come true \n But then I think I'll wait until the evening gets late \n And I'm alone with you \n The time is right, your perfume fills my head \n The stars get red and oh, the night's so blue \n And then I go and spoil it all by saying \n Something stupid like I love you \n The time is right, your perfume fills my head \n The stars get red and oh, the night's so blue \n And then I go and spoil it all by saying \n Something stupid like I love you \n I love you \n I love you \n I love you \nI love you"


    let verse1 = 'Aaya hu iss jag main jabse sab kuch hi anjaana hai \n Jaana hai sabko ek na ek din jaana hai'
    let verse2 = "Chaahu zindagi se kuch bhi nahi\n Jaane kahan main khada, jaana kahin bhi nahi"
    let verse3 = "Kitno ki chaine utri hain, kitni biki \n Jo bhi karu main galat, sahi kuch bhi nahi \n Kabhi socha na tha sapne bhi hote sach \nChhoti chhoti baaton se ye kavita main dunga rach \n"
    let verse4 = "Kuch bhi pata na mujhe, tujhse chhipana mujhe \n Khud se khafa hai launda khud se hi raha bach \n Ho raha hai jo bhi aas paas mere hone do \n So raha hai jo bhi na jagao, bas sone do \n Sochu main jo keh raha na jaane kya vo sun rahe? \n Ro raha hoon baitha na bachao, mujhe rone do"
    let verse5 = "Duniya sateek, na farak hai bas ghoome gol \n Meri na chalegi, baat ho jaye na damadol \n Ghadi ye ajeeb, sabhi ke naseeb, soch voch \n Zyada na tu, keh rahe hain sab jo, tu vo hi bol \n Chuda hoon zaroor lekin choda mujhe tumhi ne \n Saara jag bhool main chhipa baitha hoon mujhi mein \n Sakta na bhaag, atak raha main bhatak raha hoon yahan"
    let verse6 = "Ghoomu roz, dhundhu khud ko main tujhi mein"
    try{
    if(bool)
    {
        await writeFilePromise('./Saturday/somethingStupid.txt',
                        somethingStupid,
                        {flag: 'a'},
                        (err, data) => err? console.log(err) : console.log(data))
                        // (err, data) => {
                        //     if(err){
                        //         console.log(err)
                        //     }else{
                        //         console.log(data)
                        //     }
                        // })
    }
    else{
        await writeFilePromise('./Saturday/Sabkuch.txt',
        `${verse1}`,
        {flag: 'a'},
        (err, data) => err? console.log(err) : console.log(data))

        await writeFilePromise('./Saturday/Sabkuch.txt',
        `${verse2}`,
        {flag: 'a'},
        (err, data) => err? console.log(err) : console.log(data))
        }
        await new Promise(resolve => setTimeout(resolve, 3000));

        await writeFilePromise('./Saturday/Sabkuch.txt',
        `${verse3}`,
        {flag: 'a'},
        (err, data) => err? console.log(err) : console.log(data))
        await new Promise(resolve => setTimeout(resolve, 32000));
        
        await writeFilePromise('./Saturday/Sabkuch.txt',
        `${verse4}`,
        {flag: 'a'},
        (err, data) => err? console.log(err) : console.log(data))
        await new Promise(resolve => setTimeout(resolve, 3900));

        await writeFilePromise('./Saturday/Sabkuch.txt',
        `${verse5}`,
        {flag: 'a'},
        (err, data) => err? console.log(err) : console.log(data))
        await new Promise(resolve => setTimeout(resolve, 400));

        setInterval(async () => {
            await writeFilePromise('./Saturday/Sabkuch.txt', `${verse6}\n`, { flag: 'a' });
        }, 5000);
    }
    catch(error){
        console.log(error)
    }
}

//MAIN
reachOnTime()
drinkingAgain(true)