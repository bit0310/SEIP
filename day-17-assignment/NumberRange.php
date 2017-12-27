<?php
/**
 * Created by PhpStorm.
 * User: USER-PC
 * Date: 12/28/2017
 * Time: 12:42 AM
 */

class NumberRange
{
    function Range($firstNumber, $lastNumber){
        $result = ' ';
        if($firstNumber<$lastNumber){
            for ($x = $firstNumber; $x <= $lastNumber; $x++) {
//                $result = $result+$x;
//                return $result;
                echo $x.' ';

            }
        }else{
            for ($x = $firstNumber; $x >= $lastNumber; $x--) {
//                $result = $result+$x;
//                return $result;
                echo $x.' ';

            }
        }


        echo '<br/>';
    }


    function EvenNum($firstNumber,$lastNumber){
        echo "Even number are:".' ';
        for($x= $firstNumber; $x <= $lastNumber; $x++){
            if ($x % 2 == 0)
            {
                echo $x.' ';
            }
        }
        echo '<br/>';
    }

    function OddNum($firstNumber, $lastNumber){
        echo "Odd number are:".' ';
        for($x= $firstNumber; $x <= $lastNumber; $x++){

            if ($x % 2 == 1)
            {
                echo $x.' ';
            }
        }
        echo '<br/>';
    }


    function EvenNum1($firstNumber,$lastNumber){
        echo "Even number are:".' ';
        for($x= $firstNumber; $x >= $lastNumber; $x--){
            if ($x % 2 == 0)
            {
                echo $x.' ';
            }
        }
        echo '<br/>';
    }

    function OddNum1($firstNumber, $lastNumber){
        echo "Odd number are:".' ';
        for($x= $firstNumber; $x >= $lastNumber; $x--){

            if ($x % 2 == 1)
            {
                echo $x.' ';
            }
        }
        echo '<br/>';
    }

}

