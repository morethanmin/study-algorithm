package cospro2_2;

public class q4 {

    static String solution (String[] words){
        String result = "";
        for (String word:words) {
            //System.out.println(word);
            if(word.length()>=5)
            result += word;
        }
        if(result=="")
            return "empty";
        else
            return result;
    }

    public static void main(String[] args) {
        System.out.println(solution(new String[]{"yes", "i", "am"}));
    }
}
