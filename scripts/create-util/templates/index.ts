import type { CreateUtilArgs } from "../create-util.type"

export default ({ name }: CreateUtilArgs): string => {
	return (
		`export type {  } from "./${name}.type"
export {  } from "./${name}.util"`
	)
}