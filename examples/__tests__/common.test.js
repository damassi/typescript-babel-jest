const path = require('path');
const runJest = require('./__helpers__/run-jest');

describe('Common', () => {
	it('should run successfully', () => {
		const common = path.resolve(__dirname, '../common');

		const result = runJest(common, ['--no-cache']);
		const stderr = result.stderr.toString();
		const output = result.output.toString();

		expect(result.status).toBe(0);
		expect(output).toContain('PASS  source/__tests__/creeping.test.ts');
		expect(output).toContain('Common creeping');
		expect(stderr).toContain('✓ async sleep');
		expect(stderr).toContain('✓ code');
	});
});