export default function createApiOperation<T>(endpoint: string) {
  function serialize(body: T | object): Record<string, any> {
    return JSON.parse(JSON.stringify(body))
  }

  async function collection(params?: object) {
    return await $fetch<T[]>(`${endpoint}`, {
      params,
    })
  }

  async function item(id: number) {
    return await $fetch<T>(`${endpoint}/${id}`)
  }

  async function post(body: T | FormData) {
    return await $fetch<T>(`${endpoint}`, {
      method: 'POST',
      body: serialize(body),
    })
  }

  async function patch(body: T) {
    const _body = body as T & { id: number }
    if (!_body.id) {
      throw new Error('id is required')
    }

    return await $fetch<T>(`${endpoint}/${_body.id}`, {
      method: 'PATCH',
      body: serialize(_body),
    })
  }

  async function put(body: T) {
    const _body = body as T & { id: number }
    if (!_body.id) {
      throw new Error('id is required')
    }

    return await $fetch<T>(`${endpoint}/${_body.id}`, {
      method: 'PUT',
      body: serialize(_body),
    })
  }

  async function remove(id: number) {
    return await $fetch<T>(`${endpoint}/${id}`, {
      method: 'DELETE',
    })
  }

  return {
    collection,
    item,
    post,
    patch,
    put,
    remove,
  }
}
