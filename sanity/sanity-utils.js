import { createClient, groq } from "next-sanity"

const getData = async () => {
    const client = createClient({
        projectId: "0lqo36oc",
  dataset: "production",
  apiVersion: "2026-02-21",
  useCdn: false
    })
    return client.fetch(groq`*[_type == "project"][0]{ arriba }`)
}

export default getData