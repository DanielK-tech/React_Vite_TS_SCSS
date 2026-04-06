import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const distDir = path.join(projectRoot, "dist");
const sitemapIndexPath = path.join(distDir, "sitemap-index.xml");
const sitemapAliasPath = path.join(distDir, "sitemap.xml");

const ensureFileExists = async (filePath) => {
    await access(filePath, constants.F_OK);
};

try {
    await ensureFileExists(sitemapIndexPath);
    await copyFile(sitemapIndexPath, sitemapAliasPath);
    console.log("Created sitemap alias: dist/sitemap.xml");
} catch (error) {
    console.error("Could not create sitemap alias from dist/sitemap-index.xml.");
    throw error;
}