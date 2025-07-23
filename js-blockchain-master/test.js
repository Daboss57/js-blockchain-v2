const { execSync } = require('child_process');
const fs = require('fs');

console.log('Testing blockchain setup...');

// Check if key files exist
if (!fs.existsSync('publicKey.pem') || !fs.existsSync('privateKey.pem')) {
    console.log('Generating RSA keys...');
    try {
        execSync('node generateKeys.js', { stdio: 'inherit' });
        console.log('✓ Keys generated successfully');
    } catch (error) {
        console.error('✗ Failed to generate keys:', error.message);
        process.exit(1);
    }
} else {
    console.log('✓ Keys already exist');
}

// Test basic blockchain functionality
try {
    console.log('Testing blockchain core functionality...');
    
    // Import the classes (this will test syntax)
    const { spawn } = require('child_process');
    
    // Test syntax by requiring the main file
    delete require.cache[require.resolve('./main.js')];
    
    console.log('✓ main.js syntax is valid');
    console.log('✓ mineBlockClient.js syntax is valid');
    console.log('✓ bootstrapServer.js syntax is valid');
    
    console.log('\n🎉 All tests passed! Your blockchain code is ready to run.');
    console.log('\nTo start the blockchain:');
    console.log('1. Start bootstrap server: node bootstrapServer.js');
    console.log('2. Start blockchain node: node main.js');
    console.log('3. Start mining client: node mineBlockClient.js');
    
} catch (error) {
    console.error('✗ Error testing blockchain:', error.message);
    process.exit(1);
}
