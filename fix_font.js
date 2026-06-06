import fs from 'fs';
import path from 'path';

function processFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace font sizes
    content = content.replace(/text-\[10px\]|text-\[11px\]|text-xs/g, 'text-[13px]');

    fs.writeFileSync(fullPath, content, 'utf8');
}

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

// 1. Process all tsx files
processDir('./src');

// 2. Specific fix for PracticeTests subtext standardization
const practiceTestsPath = './src/components/PracticeTests.tsx';
if (fs.existsSync(practiceTestsPath)) {
    let content = fs.readFileSync(practiceTestsPath, 'utf8');
    content = content.replace(/className="text-\[13px\] uppercase tracking-widest opacity-70 leading-relaxed max-w-2xl group-hover:opacity-100 transition-opacity"/g, 
                             'className="text-[13px] opacity-70 leading-relaxed max-w-2xl group-hover:opacity-100 transition-opacity"');
    fs.writeFileSync(practiceTestsPath, content, 'utf8');
}
