import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { GetServerSideProps, NextPage } from "next"

// import { AppMenu } from "@/components/AppMenu"

const components = {
    Test: () => (
        <div
            style={{
                width: 100,
                height: 100,
                backgroundColor: "lime",
            }}
        />
    ),
}

type Props = {
    source: MDXRemoteSerializeResult
}

const Index: NextPage<Props> = ({ source }) => {
    return (
        <div className="wrapper">
            <MDXRemote {...source} components={components} />
        </div>
    )
}

export const getStaticProps: GetServerSideProps<Props> = async () => {
    // MDX text - can be from a local file, database, anywhere
    const source = "Some **mdx** text, with a component <Test/>"
    const mdxSource = await serialize(source)

    return {
        props: {
            source: mdxSource,
        },
    }
}

export default Index
