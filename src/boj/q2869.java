package boj;


import java.io.*;
import java.util.*;


public class q2869 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        int V = Integer.parseInt(st.nextToken());
        int day = (V-A)/(A-B);  //V에서 A를 뺀 높이까지 day
        if(day*(A-B)+A>=V) System.out.println(day+1);
        else System.out.println(day+2);

        //input.close();
    }
}
