import Joi from 'joi'

const validateRegesterReq = async (body) => {
    let allErrors = []
    const registerBodySchema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required()
    })

    const { error } = await registerBodySchema.validate(body)
    if (error) {
        allErrors = error.details.map(obj =>
            obj.message
        )
    }
    return allErrors
}

export { validateRegesterReq }