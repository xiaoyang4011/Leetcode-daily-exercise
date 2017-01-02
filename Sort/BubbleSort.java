public class BubbleSort {
  public static void main(String[] args) {
    int[] sortedArray = new int[]{4, 2, 1, 3, 6, 5, 9, 7, 8};
    bubbleSort(sortedArray);

    for(int i = 0; i < sortedArray.length; i++) {
      System.out.println(sortedArray[i]);
    }
  }

  public static void bubbleSort(int[] sortedArray){
    int arrayLen = sortedArray.length;

    for(int i = 0; i < arrayLen; i++) {
      for(int j = 0; j < arrayLen - i - 1; j++){
        if(sortedArray[j] > sortedArray[j + 1]) {
          int temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
  }
}
