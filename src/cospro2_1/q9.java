package cospro2_1;

public class q9 {
    static String solution(String characters){
        char char_val= ' ';
        char[] char_array = characters.toCharArray();
        for(int i=0; i<char_array.length; i++){
            if(char_val==char_array[i])
                char_array[i] = ' ';
            else
                char_val = char_array[i];
        }
        String result="";
        for(int i=0; i<char_array.length; i++){
            if(' '!=char_array[i] )
            result += char_array[i];
        }
        return result;
    }
    public static void main(String[] args) {
        System.out.println(solution("senteeeencccccceeee" ));
    }
}
