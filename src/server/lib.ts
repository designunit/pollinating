import { promisify } from "util"
import * as fs from "fs"
import { join } from "path"

const readFile = promisify(fs.readFile)

const dataDirectory = join(process.cwd(), "data")

export async function getPageBySlug(lang: string, slug: string) {
    let path = join(dataDirectory, `${slug}.${lang}.mdx`)
    let page = await getPage(path)
    if (!page) {
        let path = join(dataDirectory, `${slug}.ru.mdx`)
        page = await getPage(path)
    }
    if (!page) {
        return null
    }

    return page
}

async function getPage(path: string): Promise<string | null> {
    try {
        return readFile(path, "utf8")
    } catch (error) {
        return null
    }
}
