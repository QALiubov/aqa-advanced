function haveParam(oneParametr)
{
console.log(oneParametr);
if (oneParametr <= 0) {
        return; // зупинка рекурсії
    }

    haveParam(oneParametr - 1); 
}
haveParam(3);