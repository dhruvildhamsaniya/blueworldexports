import AdmZip from "adm-zip";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const zipPath = path.join(rootDir, "blueworldexports_build.zip");

console.log("Creating strict POSIX archive...");
console.log("Source directory:", distDir);
console.log("Target archive:", zipPath);

// Delete existing zip if it exists
if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
}

const zip = new AdmZip();

// Explicitly ensure we construct zip entries using forward slashes (POSIX standard)
function addFolderToZipRecDir(zipFile, dirPath, zipPathPrefix) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        // Convert any backwards Windows slashes to forward slashes for the internal zip path
        const zipEntryPath = (zipPathPrefix ? zipPathPrefix + "/" : "") + file;

        if (stats.isDirectory()) {
            // Must explicitly add directory entries for picky extractors with 0755 permissions
            zipFile.addFile(zipEntryPath + "/", Buffer.alloc(0));
            const entry = zipFile.getEntry(zipEntryPath + "/");
            if (entry) entry.attr = 0o40755 << 16; // drwxr-xr-x
            addFolderToZipRecDir(zipFile, filePath, zipEntryPath);
        } else {
            zipFile.addLocalFile(filePath, zipPathPrefix);
            const entry = zipFile.getEntry(zipEntryPath);
            if (entry) entry.attr = 0o100644 << 16; // -rw-r--r--
        }
    }
}

addFolderToZipRecDir(zip, distDir, "");
zip.writeZip(zipPath);

console.log("Successfully created cross-platform ZIP file at", zipPath);
