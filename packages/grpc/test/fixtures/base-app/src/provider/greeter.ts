import { MSProviderType, Provider, Provide } from '@midwayjs/decorator';
import { helloworld } from '../interface';

/**
 * package helloworld
 * service Greeter
 */
@Provide()
@Provider(MSProviderType.GRPC, { package: 'helloworld' })
export class Greeter implements helloworld.Greeter {

  /**
   * Implements the SayHello RPC method.
   */
  async sayHello(request: helloworld.HelloRequest) {
    return { message: 'Hello ' + request.name }
  }
}
