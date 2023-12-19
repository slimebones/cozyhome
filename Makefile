export host=localhost
export port=3000

lint:
	npx eslint --fix src

run:
	npx vite dev --host ${host} --port ${port} --open --strictPort
