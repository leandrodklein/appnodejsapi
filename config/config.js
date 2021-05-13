const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:357159@clusterapi.wj1hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: '357159',
                jwt_expires_in: '7d'
            }
        
        case 'hml':
            return {
                bd_string: 'mongodb+srv://usuario_admin:357159@clusterapi.wj1hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: '357159',
                jwt_expires_in: '7d'
            }
        
        case 'prod':
            return {
                bd_string: 'mongodb+srv://usuario_admin:357159@clusterapi.wj1hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: '357159',
                jwt_expires_in: '7d'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();