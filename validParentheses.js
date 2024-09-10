/**
 * @param {string} s
 * @return {boolean}
 */


let isValid = function(s) {

    const array = []
    const signe = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let letter of s) {
        if (signe[letter]) {
            array.push(letter)
        } else {
            if (array.length === 0) {
                return false;
            }
            if (signe[array.pop()] !== letter) {
                return false
            }
        }
    }
    return array.length === 0;














    
    /*
    const signe = {
        "(" : ")",
        "{" : '}',
        "[" : "]"
        };
    let array = [];
    for(let letter of s) {
        if(){
            array.push(letter);
        }
}

*/


/*

---------

// "(({[{}]}()))"
1- Premier tour de boucle --> stocker parenthese ouvrante (array[0])
2- Deuxieme tour de boucle --> stock dans le tableau parenthese ouvrante(array[1])
3- Troisième tour de boucle --> stock acolade ouvrante (array[2])
4- Quatrieme tour de boucle --> stock crochet ouvrant (array[3])
5- Cinquieme tour de boucle --> stock acolade ouvrante (array[4])
6- Sixieme tour de boucle --> acolade fermante --> verifie derniere entrer (array[4]) --> on verifie avec tableau signe l'oppos --> on detruit derniere entrer .pop() --> retour a (array[3])
7- 7eme tour de boucle --> crochet fermant --> verifie derniere entrer (array[3]) --> on verifie avec tableau signe l'oppos --> on detruit derniere entrer .pop() --> retour a (array[2])
8- 8eme tour de boucle --> acolade fermante --> verifie derniere entrer (array[2]) --> on verifie avec tableau signe l'oppos --> on detruit derniere entrer .pop() --> retour a (array[1])
9- 9eme tour de boucle --> parenthese ouvrante --> stock parenthese ouvrante (array[2])
10- 10eme tour de boucle --> parenthese fermante --> verifie derniere entrer (array[2]) --> on verifie avec tableau signe l'oppos --> on detruit derniere entrer .pop() --> retour a (array[1])








Faire un tableau associatif des 3 caractères et de ces opposés
Boucler la string de la fonction et verifier avec le tableau si son opposé existe, si elle n'existe pas
on regarde avec le tableau inversé, et si il n'existe tjr pas c'est false


*/





   /* for(let i = 0; i < s.length; i++) {
        let e = s.charAt(i);
        console.log(e);
        switch(e) {
            case '(':
            s.includes(')');
            console.log('1');
            break;
            case '{':
            s.includes('}');
            console.log('2');
            break;
            case '[':
            s.includes(']');
            console.log('3');
            break;
            case ')':
            s.includes('(');
            console.log('4');
            break;
            case '}':
            s.includes('{');
            console.log('5');
            break;
            case ']':
            s.includes('[');
            console.log('6');
            break;
            default:
            return false;
        }
    }
    return true;
*/
};

// 1- Creer un tableau avec les 3 caracteres ouvrant et un tableau avec les caracteres fermant
// 2- Je boucle la string de la fonction et je recherche dans le premier tableau un des 3 signes, si il y en a un je garde l'index du premier tableau et je compare l'index





/*

Boucle qui detecte les signes ouvrant et en place un fermé directement avec celui ouvrant dans un autre tableau, même si il ne respecte pas l'ordre, on verifie à la taille du tableau si c'est true

(] doit donner -> ()

*/