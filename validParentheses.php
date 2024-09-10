<?php

class Solution {

    function isValid($s) {
        $array = [];
        $signe = ['(' => ')', '{' => '}', '[' => ']'];
        for ($i = 0; $i < strlen($s); $i++) {
            $letter = $s[$i];
            if($signe[$letter]) {
                $array[] = $letter;
                // array_push($array, $letter); 
            } else {
                if(count($array) === 0) {
                    return false;
                }
                if($signe[array_pop($array)] !== $letter) {
                    return false;
                }
            }
        }
        if(count($array) === 0) {
            return true;
        } else {
            return false;
        }
    }
}