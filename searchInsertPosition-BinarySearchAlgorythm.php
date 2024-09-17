<?php

class Solution
{

    function searchInsert($nums, $target)
    {
        $startArrayIndex = 0;
        $endArrayIndex = count($nums) - 1;

        while ($startArrayIndex <= $endArrayIndex) {
            $midArrayIndex = floor(($startArrayIndex + $endArrayIndex) / 2);

            if ($nums[$midArrayIndex] == $target) {
                return $midArrayIndex;
            }
            if ($nums[$midArrayIndex] < $target) {
                $startArrayIndex = $midArrayIndex + 1;
            } else {
                $endArrayIndex = $midArrayIndex - 1;
            }
        }
        return $startArrayIndex;
    }
}