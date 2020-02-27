package ApachePOI;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class WritingIntoExcel {

    public static void main(String[] args) throws IOException {

        XSSFWorkbook workbook;
        XSSFSheet sheet;
        XSSFCell cell;
        XSSFRow row;
        FileInputStream fileInputStream = new FileInputStream("src/TestData.xlsx");

        workbook = new XSSFWorkbook(fileInputStream);
        sheet = workbook.getSheet("Employees");

        row = sheet.getRow(1);
        cell = row.getCell(1);
        XSSFCell adamsCell = sheet.getRow(2).getCell(0);
        System.out.println("Before "+adamsCell);

        adamsCell.setCellValue("Sadam");
        System.out.println("After "+adamsCell);

        //to specify which file we are writing to
        FileOutputStream fileOutputStream = new FileOutputStream("src/TestData.xlsx");
        workbook.write(fileOutputStream);

        fileInputStream.close();
        fileOutputStream.close();
        workbook.close();

    }

}
