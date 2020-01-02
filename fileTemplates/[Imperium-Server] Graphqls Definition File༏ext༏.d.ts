/*
  This file should sit outside of your source files and be included from tsconfig.json.
  
  "files": ["types/graphqls.d.ts"]
*/
declare module '*.graphqls' {
	import {DocumentNode} from 'graphql';
	
	const Schema: DocumentNode;
	
	export = Schema;
}
