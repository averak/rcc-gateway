import { Injectable } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';

@Injectable({
  providedIn: 'root',
})
export class FileDownloadService {
  constructor() {}

  exportAsCsv(filename: string, data: any, headers: string[]): void {
    const options = {
      filename: filename,
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
      headers: headers,
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(data);
  }
}
