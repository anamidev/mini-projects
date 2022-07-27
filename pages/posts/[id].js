export default function Post({ postData }) {
    return (
        <div>
            <p>{postData}</p>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postId = params.id;
    return {
        props: {
            postData: `Post data based on ID /posts/${postId}`
        }
    }
}