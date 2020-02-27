package ApachePOI;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class ReadingFromExcel {

    public static void main(String[] args) throws IOException {
        //first time copy your excel file and pass it src level

        File file = new File("src/TestData.xlsx");

        //System.out.println(file.exists());
        //load file into java memory using FileInputStream
        FileInputStream fileInputStream = new FileInputStream(file);

        // load excel workbook into the java class
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        // workbook -> sheet -> row -> cell
        // getting the sheet from the workbook
        XSSFSheet sheet = workbook.getSheet("Employees");

        // getting one cell from sheet
        String data = "" + sheet.getRow(2).getCell(1);
        XSSFCell adamsCell = sheet.getRow(2).getCell(0);

        double result = sheet.getRow(1).getCell(3).getNumericCellValue();

        if(sheet.getRow(1).getCell(4) == null){
            sheet.getRow(1).createCell(4);
        }
        sheet.getRow(1).getCell(4).setCellValue("yahu");


        int usedRows = sheet.getPhysicalNumberOfRows();
        //will count only the used cells, unused ones will not be counted, starts counting from 1

        int lastUsedRow = sheet.getLastRowNum();
        // will count 0, does not care if between have empty cells

        //TODO: Print Zhaina's name dynamically
        for(int i = 0; i < usedRows; i++){
            if(sheet.getRow(i).getCell(0).toString().equals("Zhaina")){
                System.out.println(sheet.getRow(i).getCell(0));
            }
        }

        FileOutputStream fileOutputStream = new FileOutputStream("src/TestData.xlsx");
        workbook.write(fileOutputStream);


        fileInputStream.close();
        fileOutputStream.close();
        workbook.close();

    }

}
