import UserService from "../services/user-service";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: err
        })
    }
}

export const login = async (req, res) => {
    try {
        const response = await userService.sigin(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully logged in',
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: err
        })
    }
}