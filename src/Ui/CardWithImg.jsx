export default function CardWithImg({img,title,description}){
    return       <div
        className="h-50 rounded-xl bg-cover bg-center w-full mt-10 "
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* make liner gradiand */}
        <div className="w-full h-full text-white py-4 px-2 flex flex-col items-start justify-end gap-1"
        style={{background: `linear-gradient(0deg, #0A192F 0%, rgba(10, 25, 47, 0.4) 50%, rgba(10, 25, 47, 0) 100%)`}}>
          <h5 className="font-bold text-sm max-md:text-sm ">
            {title}
          </h5>
          <p className="text-xs ">
            {description}
          </p>
        </div>
      </div>
}