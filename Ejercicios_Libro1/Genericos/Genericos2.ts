function RemoverCaracter (theString: string, theChar:string):string{
    let theRegex= new RegExp(theChar,"gi");
    return theString.replace(theRegex,' ');
}


//function removeIt<T>(theInput: T, theIt: string): T {
    //let theRegex = new RegExp(theIt, "gi");
    //return theInput.replace(theRegex, '');//Typescript no puede asumir el tipo de dato
//}