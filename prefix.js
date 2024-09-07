function longestCommonPrefix(strs) {

    const minLength = Math.min(...strs.map(word => word.length));
    const shortenedWords = strs.map(word => word.slice(0, minLength));
    console.log(shortenedWords);

    let prefix = shortenedWords[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Compare le premier mot du tableau tant qu'il ne correspond pas
            if (prefix === "") return "";
            prefix = prefix.substring(0, prefix.length - 1); // Pour cela, on reduit d'une lettre à chaque fois 
        }
    }

    return prefix;
}
// console.log(multiArray[i][e]);

// 1- Transformer ["flower","flow","flight"] en [["f","l","o","w","e","r"], ["f","l","o","w"], ["f","l","i","g","h","t"]]
// 2- Boucler chaque lettre de chaque tableau
// 3- Comparer les premieres lettres de chaque tableau, si elle corresponde, enregister la suite dans un autre tableau.
//    Si elle ne correspondent pas passez à la suivante
//    Si 3 lettres correspondent mais pas les suivantes reset le tableau (car suite d'une seul lettre --> trop court)