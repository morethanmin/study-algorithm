package cospro2_1;

public class q8
{
    static boolean solution(String sentance){
        //boolean result = false;

        sentance = sentance.replaceAll(" ","");
        sentance = sentance.replaceAll("\\.","");
        for(int i=0; i<sentance.length(); i++){
            //System.out.println(sentance.charAt(i));
            sentance.charAt(i);
            if(sentance.charAt(i)!= sentance.charAt(sentance.length()-1-i))
                return false;
        }
        //result = true
        return true;
    }
    public static void main(String[] args) {
        System.out.println(solution("never odd or even."));

    }
}
