package cospro2;

import java.awt.*;

public class q7 {
    public static int solution(int scores[]){
        int result=0;
        for (int score:scores
             ) {
            if(score>=650 && score<800) result++;
        }
        return result;
    }
    public static void main(String[] args){
        int scores[] = {650, 722, 914, 558, 714, 803, 650, 679, 669, 800};

        System.out.println(solution(scores));
    }
}
