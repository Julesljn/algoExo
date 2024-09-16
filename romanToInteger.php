<?php

class Solution {

private const NUMBER = [
    'I' => 1,
    'V' => 5,
    'X' => 10, 
    'L' => 50, 
    'C' => 100, 
    'D' => 500, 
    'M' => 1000
    ];

function romanToInt($s) {
    $finalNumber = 0;
    $letters = str_split($s);
    
        for($i = 0; $i < count($letters); $i++) {
            if(self::NUMBER[$letters[$i]] >= self::NUMBER[$letters[$i+1]]) {
                $finalNumber += self::NUMBER[$letters[$i]];
            } 
            else if(self::NUMBER[$letters[$i]] < self::NUMBER[$letters[$i+1]]) {
               $finalNumber -= self::NUMBER[$letters[$i]];
            }
            
            
        }
       
        return $finalNumber;
       
    
    

}
}