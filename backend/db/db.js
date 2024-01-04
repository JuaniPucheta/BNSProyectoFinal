import mongoose from "mongoose";

const conectarBD = async () => {
		mongoose.connect('mongodb://127.0.0.1:27017/bnsProyectoFinal')
			.then(() => {
				console.log('✅ Conectado a mongo');
		})
			.catch((error) => {
				console.error('❌ Error connecting to MongoDB:', error);
		});
};
	
export default conectarBD;